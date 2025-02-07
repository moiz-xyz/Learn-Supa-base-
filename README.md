# 🚀 Learn Supabase - The Open Source Firebase Alternative

![Supabase Logo](https://yt3.googleusercontent.com/KVjptxDSWT7rjVfGax2TgTNVAYgplgo1z_fwaV3MFjPpcmNVZC0TIgQV030BPJ0ybCP3_Fz-2w=s900-c-k-c0x00ffffff-no-rj)

## 📌 What is Supabase?
Supabase is an open-source alternative to Firebase that provides authentication, database, storage, and serverless functions—all built on PostgreSQL.

---

## 🏗 Getting Started with Supabase

### 1️⃣ Setup Supabase Account & Project
- Go to [Supabase](https://supabase.com/)
- Sign up and create a new project
- Copy your API keys from **Project Settings → API**

---

## 🔑 Authentication (Supabase Auth)
Supabase provides built-in authentication with **email/password**, **OAuth**, and **magic links**.

### 📍 Install Supabase SDK
```sh
npm install @supabase/supabase-js
```

### 📍 Initialize Supabase
```js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'YOUR_SUPABASE_URL';
const supabaseKey = 'YOUR_SUPABASE_ANON_KEY';
const supabase = createClient(supabaseUrl, supabaseKey);
```

### 📍 Sign Up User
```js
const { data, error } = await supabase.auth.signUp({
  email: 'user@example.com',
  password: 'securepassword'
});
```

### 📍 Sign In User
```js
const { data, error } = await supabase.auth.signInWithPassword({
  email: 'user@example.com',
  password: 'securepassword'
});
```

### 📍 Sign Out User
```js
await supabase.auth.signOut();
```

---

## 🗄 Database (PostgreSQL)
### 📍 Creating a Table
- Go to **Database → Tables** in Supabase Dashboard
- Click **New Table** and define columns (e.g., `id`, `name`, `email`)

### 📍 Insert Data
```js
const { data, error } = await supabase.from('users').insert([
  { name: 'John Doe', email: 'john@example.com' }
]);
```

### 📍 Fetch Data
```js
const { data, error } = await supabase.from('users').select('*');
console.log(data);
```

### 📍 Update Data
```js
const { data, error } = await supabase.from('users').update({ name: 'Jane Doe' }).eq('id', 1);
```

### 📍 Delete Data
```js
const { data, error } = await supabase.from('users').delete().eq('id', 1);
```

---

## 📂 Storage (Upload & Manage Files)
### 📍 Upload File
```js
const file = document.querySelector('#file-input').files[0];
const { data, error } = await supabase.storage.from('avatars').upload('profile.jpg', file);
```

### 📍 Get File URL
```js
const { data } = supabase.storage.from('avatars').getPublicUrl('profile.jpg');
console.log(data.publicUrl);
```

### 📍 Delete File
```js
const { data, error } = await supabase.storage.from('avatars').remove(['profile.jpg']);
```

---

## 🎯 Conclusion
Supabase is a powerful backend solution that makes authentication, database management, and file storage easy. Start building your app today!

🔗 **Official Docs:** [Supabase Documentation](https://supabase.com/docs)
