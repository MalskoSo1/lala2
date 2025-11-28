import axios from 'axios';

import { artistId } from '../main';

// !НЕПОТРІБНО
export async function getCards() {
  try {
    const url = 'https://sound-wave.b.goit.study/api/artists?limit=25&page=1';
    const response = await axios.get(url);

    return response.data;
  } catch (err) {
    console.log(err);
  }
}
// !НЕПОТРІБНО

export async function getArtistInfo() {
  try {
    let urlArtist = 'https://sound-wave.b.goit.study/api/artists/';

    urlArtist += artistId;

    const response = await axios.get(urlArtist);

    return response.data;
  } catch (err) {
    console.log(err);
  }
}
