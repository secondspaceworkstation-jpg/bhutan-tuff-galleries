import { exportCsv } from './_enquiries.js';

const FIELDS = [['received', 'Received'], ['name', 'Name'], ['surname', 'Surname'], ['email', 'Email'], ['phone', 'Phone'],
  ['professione', 'Profession'], ['city', 'City'], ['cap', 'PIN code'], ['nation', 'Country'], ['gallery', 'Office'],
  ['message', 'Message'], ['newsletter', 'Newsletter'], ['privacy', 'Privacy accepted']];

export default (req, res) => exportCsv(req, res, 'gallery', FIELDS);
