import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import { sendEmail } from '../../../utils/sendEmail'; 
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

mongoose.connect(MONGODB_URI).catch(err => {
  console.error('Error connecting to MongoDB:', err);
});

const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
}, { timestamps: true });

const Message = mongoose.models.Message || mongoose.model('Message', messageSchema);

export async function POST(request) {
  try {
    console.log('Request received');
    const { name, email, message } = await request.json();
    console.log('Parsed request:', { name, email, message });

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const newMessage = new Message({ name, email, message });
    await newMessage.save();

    // Send email
    await sendEmail(
      'surajem217@gmail.com',
      'New Contact Form Submission',
      `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    );

    return NextResponse.json({ message: 'Message sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error saving message:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}