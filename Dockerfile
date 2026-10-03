# نبلّش من صورة جاهزة فيها Node.js نسخة 20 (نسخة خفيفة alpine)
FROM node:20-alpine

# نحدّد مجلد الشغل جوّا الـ container
WORKDIR /app

# ننسخ ملفات الـ package أول (قبل باقي الكود)
COPY package*.json ./

# نركّب المكتبات — بس اللي للإنتاج (بدون أدوات التطوير زي jest)
RUN npm ci --omit=dev

# ننسخ باقي كود المشروع
COPY . .

# نوثّق إنو التطبيق بيستعمل port 3000
EXPOSE 3000

# الأمر اللي بيشتغل لما يشتغل الـ container
CMD ["node", "server.js"]