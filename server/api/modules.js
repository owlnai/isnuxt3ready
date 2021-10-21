import data from './../../modules.json';
export default async (req, res) => {
  if (req.url.length > 1) {
    return data.filter(item => item.name == req.url.slice(1))[0];
  } else {
    return data;
  }
};
