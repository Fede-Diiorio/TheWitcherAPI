import dbConfig from "../dbConfig.js";

export default class BeastRepository {
  async getAllBeasts(limit, offset) {
    const [rows] = await dbConfig.query(
      ` SELECT 
	        m.id, 
          c.name AS category, 
          m.name, 
          m.hability, 
          m.description 
        FROM monsters AS m
        INNER JOIN categories AS c ON (c.id = m.id_category)
        ORDER BY id
        LIMIT ? OFFSET ?;`,
      [limit, offset]
    );
    return rows;
  }
}
