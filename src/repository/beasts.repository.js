import dbConfig from "../dbConfig.js";

export default class BeastRepository {
  async getAllBeasts() {
    const rows = await dbConfig.query("SELECT * FROM monsters");
    return rows;
  }
}
