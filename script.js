function enviarWhatsApp(produto) {
    const mensagem = `Olá! Tenho interesse no produto "${produto}" que vi no site.`;
    const numero = '5598999999999'; // substitua pelo número real
    const link = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(link, '_blank');
  }