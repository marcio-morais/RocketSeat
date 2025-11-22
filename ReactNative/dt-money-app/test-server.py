import http.server
import socketserver
import json
from urllib.parse import urlparse, parse_qs

class CORSHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
        super().end_headers()
    
    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()
    
    def do_GET(self):
        self.send_response(200)
        self.send_header('Content-Type', 'application/json')
        self.end_headers()
        response = {
            "message": "Servidor Python funcionando!",
            "timestamp": "2025-11-17",
            "endpoint": self.path
        }
        self.wfile.write(json.dumps(response).encode())
    
    def do_POST(self):
        if self.path == '/auth/login':
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            response = {
                "message": "Login bem-sucedido!",
                "token": "test-token-123",
                "user": {"id": 1, "name": "Usuário Teste"}
            }
            self.wfile.write(json.dumps(response).encode())
        else:
            self.send_response(404)
            self.end_headers()

if __name__ == "__main__":
    PORT = 3002
    HOST = "0.0.0.0"  # Escuta em todas as interfaces
    
    with socketserver.TCPServer((HOST, PORT), CORSHTTPRequestHandler) as httpd:
        print(f"🐍 Servidor Python rodando em http://{HOST}:{PORT}")
        print(f"📱 Para dispositivos físicos, use: http://192.168.0.77:{PORT}")
        print(f"💻 Para localhost, use: http://localhost:{PORT}")
        httpd.serve_forever()