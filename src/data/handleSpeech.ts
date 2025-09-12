import Bun from "bun";
import { Leopard } from "@picovoice/leopard-node";

const handleSpeech = async (request: Request) => {
  const leopard = await initializeLeopard();
  const speech: Blob = await request.blob();
  const filepath = `./speech_cache/${Date.now()}.wav`;
  await Bun.write(filepath, speech);
  const speechProcessed = leopard.processFile(filepath);
  const file = Bun.file(filepath);
  await file.delete();

  return Response.json({ speechText: speechProcessed.transcript }, { status: 200 });
};

const initializeLeopard = (retries: number = 0) => new Promise<Leopard>((resolve, reject) => {
  try {
    const leopard = new Leopard(process.env.PICOVOICE_API_KEY || "");
    resolve(leopard);
  }
  catch(err) {
    if (retries >= 10) {
      reject(err);
    }
    return initializeLeopard(retries + 1);
  }
});

export default handleSpeech;