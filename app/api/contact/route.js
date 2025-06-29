import axios from 'axios';
import { NextResponse } from 'next/server';

// Helper function to send a message via Telegram
async function sendTelegramMessage(token, chat_id, message) {
  const url = `https://api.telegram.org/bot${token}/sendMessage`;
  try {
    const res = await axios.post(url, {
      text: message,
      chat_id,
    });
    return res.data.ok;
  } catch (error) {
    console.error('Error sending Telegram message:', error.response?.data || error.message);
    return false;
  }
};

export async function POST(request) {
  try {
    const payload = await request.json();
    const { name, email, message: userMessage } = payload;
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chat_id = process.env.TELEGRAM_CHAT_ID;

    // Validate Telegram configuration
    if (!token || !chat_id) {
      return NextResponse.json({
        success: false,
        message: 'Telegram configuration is missing.',
      }, { status: 400 });
    }

    console.log('Telegram config check:', {
      hasToken: !!token,
      hasChatId: !!chat_id,
      chatId: chat_id
    });

    // Format message for Telegram
    const telegramMessage = `🔔 *New Portfolio Contact*\n\n` +
      `👤 *Name:* ${name}\n` +
      `📧 *Email:* ${email}\n` +
      `💬 *Message:*\n${userMessage}`;

    // Send Telegram message
    try {
      const telegramSuccess = await sendTelegramMessage(token, chat_id, telegramMessage);

      if (telegramSuccess) {
        return NextResponse.json({
          success: true,
          message: 'Message sent successfully via Telegram!',
        }, { status: 200 });
      } else {
        return NextResponse.json({
          success: false,
          message: 'Failed to send Telegram message.',
        }, { status: 500 });
      }
    } catch (error) {
      console.error('Telegram error:', error);
      return NextResponse.json({
        success: false,
        message: 'Error sending Telegram message.',
        error: error.message
      }, { status: 500 });
    }
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({
      success: false,
      message: 'Server error occurred.',
      error: error.message
    }, { status: 500 });
  }
};