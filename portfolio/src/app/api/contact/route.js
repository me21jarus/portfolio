import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import { sendEmail } from '../../../utils/sendEmail';

const MONGODB_URI = process.env.MONGODB_URI;

// Validate MongoDB connection string
if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable in .env.local');
}

// Connect to MongoDB
const connectToDatabase = async () => {
  if (mongoose.connection.readyState === 0) {
    try {
      await mongoose.connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('Connected to MongoDB');
    } catch (err) {
      console.error('Error connecting to MongoDB:', err);
      throw new Error('Database connection failed');
    }
  }
};

const messageSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

// Reuse the model or create a new one
const Message = mongoose.models.Message || mongoose.model('Message', messageSchema);

export async function POST(request) {
  try {
    console.log('Request received');

    // Parse JSON body from request
    const { name, email, message } = await request.json();
    console.log('Parsed request:', { name, email, message });

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    // Connect to the database
    await connectToDatabase();

    // Save message to the database
    const newMessage = new Message({ name, email, message });
    await newMessage.save();
    console.log('Message saved to database');

    // Send confirmation email
    await sendEmail(
      process.env.EMAIL_USER, // Your email
      'New Contact Form Submission',
      `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    );
    console.log('Email sent successfully');

    // Return success response
    return NextResponse.json({ message: 'Message sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error handling contact form submission:', error);
    return NextResponse.json({ error: 'Failed to process the request' }, { status: 500 });
  }
}
