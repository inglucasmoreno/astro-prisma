
import { prisma } from "../../db";
import { defineAction } from 'astro:actions';

export const getPlaces = defineAction({
    accept: 'json',
    handler: async () => {
        try {
            const places = await prisma.place.findMany();
            return places;
        }catch(error){
            console.log(error);
            throw new Error('Error getting places');
        }
    },
});
