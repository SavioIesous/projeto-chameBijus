function enviarWhatsApp(produto) {
    const mensagem = `Olá! Tenho interesse no produto "${produto}" que vi no site.`;
    const numero = '55838217-2222';
    const link = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(link, '_blank');
  }