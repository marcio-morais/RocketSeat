# Script para criar proxy do servidor local para todas as interfaces
# Execute como Administrador

# Instalar socat se não tiver
# winget install socat

# Criar proxy da porta 3001 (localhost) para 3003 (todas interfaces)
socat TCP4-LISTEN:3003,bind=0.0.0.0,fork TCP4:127.0.0.1:3001