function openChannel(url) {
  document.getElementById('videoPlayer').src = url; // Atualiza o src do iframe com o URL do canal
}

// Função de pesquisa
document.getElementById('searchInput').addEventListener('input', function() {
  const searchTerm = this.value.toLowerCase();
  const channels = document.querySelectorAll('.channel');
  channels.forEach(channel => {
      const channelName = channel.querySelector('h3').innerText.toLowerCase();
      if (channelName.includes(searchTerm)) {
          channel.style.display = '';
      } else {
          channel.style.display = 'none';
      }
  });
});
