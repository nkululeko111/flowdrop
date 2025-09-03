# 🌍 FlowDrop – Community-Powered Delivery Network

**Tagline:** *“Packages move like data, jobs grow like communities.”*

FlowDrop is a **last-mile delivery network** that turns **homes, cafés, and shops into Drop Zones**, and allows everyday people to become **couriers**. Packages move in **multi-hop relays**, verified by QR scans and tracked in real-time.

This repository contains two apps:

* 📱 **Mobile App (Expo / React Native)** – for Customers, Couriers, and Drop Zone Hosts
* ⚙️ **Backend API (Node / Express / Supabase)** – delivery orchestration, matching, tracking

---

## 📂 Repo Structure

```
flowdrop/
  apps/
    mobile/   # Expo React Native app (customer, courier, host roles)
    server/   # Node/Express backend with Supabase Postgres
  README.md   # This file
```

---

## 🚀 Features

* **Multi-hop delivery routing** (like data packets on the internet)
* **Customer** – create delivery, pay, track live on map
* **Courier** – set availability, accept jobs, scan QR for handoffs
* **Drop Zone Host** – receive/dispatch packages, earn passive income
* **Real-time tracking** via SSE + React Query
* **QR/NFC verification** at every hop
* **Supabase Auth** (magic link login)
* **Earnings system** for Couriers and Hosts
* **Seed data** for demo

---

## ⚡ Tech Stack

### Mobile

* Expo SDK **53.0.22**
* React Native **0.79.5**
* Expo Router **5.1.5**
* Reanimated **3.17.4** (plugin as last in Babel config)
* Zustand + React Query
* Expo Camera (QR scanning)
* React Native Maps
* TypeScript

### Backend

* Node.js **20**
* Express + TypeScript
* Supabase (Postgres + Auth)
* Zod (validation)
* Server-Sent Events (tracking updates)

---

## 🔑 Requirements

* Node.js v20+
* npm v10+
* [Supabase account](https://supabase.com/) (free tier works fine)
* Expo Go app (for testing on iOS/Android)

---

## 🛠 Setup

### 1. Clone repo

```bash
git clone https://github.com/nkuululeko111/flowdrop.git
cd flowdrop
```

### 2. Environment Variables

Create `.env` files for both apps:

#### `apps/server/.env`

```
SUPABASE_URL=your-supabase-url
SUPABASE_ANON_KEY=your-anon-key
PORT=4000
```

#### `apps/mobile/.env`

```
SUPABASE_URL=your-supabase-url
SUPABASE_ANON_KEY=your-anon-key
API_BASE_URL=http://localhost:4000
```

---

## ▶️ Running the Backend

```bash
cd apps/server
npm install
npm run dev
```

This will start the API at `http://localhost:4000`.

---

## 📱 Running the Mobile App

```bash
cd apps/mobile
npm install
npx expo start -c
```

* Press **i** for iOS Simulator (Mac only)
* Press **a** for Android Emulator
* Or scan QR with **Expo Go** on your phone

⚠️ Important: Ensure `babel.config.js` has `react-native-reanimated/plugin` as the **last plugin**.

---

## 🧪 Demo Data

To load sample Drop Zones, Couriers, and Deliveries:

```bash
cd apps/server
npm run seed
```

This will populate:

* 5 Drop Zones (shops/homes)
* 3 Couriers with availability
* 3 Deliveries (pending, in\_transit, delivered)

---

## 🌐 API Endpoints (Server)

* `POST /deliveries` → create a delivery
* `GET /deliveries/:id` → fetch delivery + hops
* `POST /events/scan` → process QR scan handoff
* `POST /courier/availability` → declare availability
* `GET /courier/matches` → get matched jobs
* `GET /drop-zones` → list nearby Drop Zones
* `GET /stream/deliveries/:id` → live updates (SSE)

---

## 📊 Roadmap

* ✅ MVP: Auth, delivery creation, courier matching, QR verification
* 🔄 Next: Payments integration (Stripe/MoMo)
* 🔄 Gamification: FlowPoints + leaderboards
* 🔄 Offline-first sync for couriers in low-connectivity areas

---

## 👥 Roles

* **Customer** – Create & track deliveries
* **Courier** – Transport packages on existing routes
* **Host (Drop Zone)** – Store/dispatch packages from home/shop

---

## 🧩 Architecture

**Think of FlowDrop like the internet of packages:**

* **Mini-hubs = servers**
* **Couriers = routers**
* **Drop Zones = caches**
* **AI = network protocol**
* **Packages = data packets**

---

## 📜 License

MIT – free to use, improve, and deploy.

---


