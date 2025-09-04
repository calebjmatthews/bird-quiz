import Bun from "bun";
import { Leopard } from "@picovoice/leopard-node";

const handleSpeech = async (request: Request) => {
  const leopard = new Leopard(process.env.PICOVOICE_API_KEY || "");

  const speech: Blob = await request.blob();
  const filepath = `./speech_cache/${Date.now()}.wav`;
  await Bun.write(filepath, speech);
  const speechProcessed = leopard.processFile(filepath);
  const file = Bun.file(filepath);
  await file.delete();

  return Response.json({ speechText: speechProcessed.transcript }, { status: 200 });
};

export default handleSpeech;