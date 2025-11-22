const http = require('http');

const server = http.createServer((req, res) => {
  // Configurar CORS para permitir requisições do app
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }
  
  if (req.url === '/auth/login' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    
    req.on('end', () => {
      console.log('Requisição recebida:', body);
      res.setHeader('Content-Type', 'application/json');
      res.writeHead(200);
      res.end(JSON.stringify({
        message: 'Login bem-sucedido!',
        token: 'test-token-123',
        user: { id: 1, name: 'Usuário Teste' }
      }));
    });
  } else {
    res.setHeader('Content-Type', 'application/json');
    res.writeHead(200);
    res.end(JSON.stringify({
      message: 'Servidor de teste funcionando!',
      timestamp: new Date().toISOString(),
      ip: req.connection.remoteAddress
    }));
  }
});

// IMPORTANTE: Escutar em 0.0.0.0 para permitir conexões de dispositivos externos
const PORT = 3002;
const HOST = '0.0.0.0'; // Escuta em todas as interfaces de rede

server.listen(PORT, HOST, () => {
  console.log(`🚀 Servidor de teste rodando em http://${HOST}:${PORT}`);
  console.log(`📱 Para dispositivos físicos, use: http://192.168.0.77:${PORT}`);
  console.log(`💻 Para localhost, use: http://localhost:${PORT}`);
});