# eShopExchange

eShopExchange is an online marketplace built using the MantaHQ SDK. It includes full CRUD operations, real-time search, filtering, and pagination.

**DEMO:** [https://eshopexchange.netlify.app/](https://eshopexchange.netlify.app/)

![Screenshot of eShopExchange](./public/preview.png)

## Prerequisites

- Node.js 18+
- npm or yarn
- [MantaHQ Account](https://www.mantahq.com) and [API key](https://docs.mantahq.comhttps://mantahq-core-sdk.super.site/getting-started)

## Setup

1. **Clone the repository**

```bash
git clone https://github.com/trevorcj/eShopExchange.git
cd eShopExchange
```

2. **Install dependencies**

```bash
npm install
```

3. **Add your API key**
   Create a `.env` file in the root:

```
VITE_MANTAHQ_API_KEY=your_api_key_here
```

5. **Run the development server**

```bash
npm run dev
```

## Database Setup

Create this table in MantaHQ Studio:

| Field       | Type   | Required |
| ----------- | ------ | -------- |
| product_id  | string | Yes      |
| name        | string | Yes      |
| category    | string | Yes      |
| price       | number | Yes      |
| stock       | number | Yes      |
| description | string | No       |
| image_url   | string | No       |

---

That's it!
