import { MantaClient } from "mantahq-sdk";
import { useEffect, useState } from "react";

const API_KEY = import.meta.env.VITE_MANTAHQ_API_KEY;
const manta = new MantaClient({
  sdkKey: API_KEY,
});

function App() {
  const [giveawayData, setGiveawayData] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchRecord() {
    try {
      const res = await manta.fetchOneRecord({
        table: "giveaways", // table on mantahq
        where: {
          date: "2025-07-19",
          tel: { notEquals: "09165536637" },
        },
        fields: ["title", "description", "date", "item_id"],
        with: {
          foods: {
            fields: ["date", "item", "unit", "price", "location", "identifier"],
            on: { from: "item_id", to: "identifier" },
          },
        },
      });

      if (!res.status) throw new Error("Error fetching data");

      const {
        data: { data },
      } = res;

      console.log(data);
      setGiveawayData(data);
    } catch (err) {
      console.error("No data found!", err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(function () {
    fetchRecord();
  }, []);

  return (
    <div>
      <p>Giveaway items listed on '2025-07-19'</p>
      {loading ? (
        <div>Loading...</div>
      ) : giveawayData ? (
        <ul>
          <li>
            <strong>Title:</strong> {giveawayData.title}
          </li>
          <li>
            <strong>Description:</strong> {giveawayData.description}
          </li>
          <li>
            <strong>Date:</strong> {giveawayData.date}
          </li>
          <li>
            <strong>Image:</strong>{" "}
            {`${giveawayData.image ? giveawayData.image : "N/A"}`}
          </li>
          <li>
            <strong>Location:</strong> {giveawayData.location}
          </li>
          <li>
            <strong>Tel:</strong> {giveawayData.tel}
          </li>
          <li>
            <strong>Item ID:</strong> {giveawayData.item_id}
          </li>
        </ul>
      ) : (
        <p>No giveaway found for this date.</p>
      )}
    </div>
  );
}

export default App;
