FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["npm", "start"]

# Variable 2
# FROM node:alpine

# # Set working directory
# WORKDIR /opt/app

# # Install PM2 globally
# RUN npm install --global pm2

# # Copy "package.json" and "package-lock.json" before other files
# # Utilise Docker cache to save re-installing dependencies if unchanged
# COPY ./package*.json ./

# # Install dependencies
# RUN npm install --production

# # Copy all files
# COPY ./ ./

# # Build app
# RUN npm run build

# # Expose the listening port
# EXPOSE 3000

# # Run container as non-root (unprivileged) user
# # The "node" user is provided in the Node.js Alpine base image
# USER node

# # Launch app with PM2
# CMD [ "pm2-runtime", "start", "npm", "--", "start" ]
