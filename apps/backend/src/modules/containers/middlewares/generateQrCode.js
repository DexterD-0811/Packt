import QRCode from 'qrcode';

export async function generateQrCode(doc, next) {
  try {
    if (doc.qrCode) return next();

    const qrCodeDataUrl = await QRCode.toDataURL(doc._id.toString(), {
      errorCorrectionLevel: 'H',
      margin: 1,
      width: 250,
    });

    await doc.updateOne({ qrCode: qrCodeDataUrl });

    next();
  } catch (error) {
    console.error('QR code generation error:', error);
    next(error);
  }
}
