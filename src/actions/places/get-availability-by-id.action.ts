
import { defineAction } from "astro:actions";
import { z } from 'zod';

export const getAvalabilityById = defineAction({
  accept: "json",
  input: z.string(),
  handler: async (placeId) => {

    await new Promise((resolve) => setTimeout(resolve, 3000)); // Retardo de 3 segundos

    const isAvailable = Math.random() > 0.5; // true | false
    const spotsAvailable = Math.floor(Math.random() * 10) + 1;

    let message = 'No hay espacios disponibles';
    if(!isAvailable){
      message = spotsAvailable > 1 ? `Quedan ${spotsAvailable} espacios disponibles` : 'Queda 1 espacio disponible';
    }

    return {
      id: placeId,
      isAvailable,
      spotsAvailable,
      message
    }

  },
});