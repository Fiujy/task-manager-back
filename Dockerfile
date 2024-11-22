# Utilisez une image Node.js stable
FROM node:16

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers nécessaires
COPY package*.json ./
RUN npm install --production

# Copier le reste des fichiers
COPY . .

# Build NestJS en production
RUN npm run build

# Exposer le port
EXPOSE 3000

# Commande pour lancer l'application
CMD ["npm", "run", "start:prod"]