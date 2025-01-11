import BeastRepository from "../repository/beasts.repository.js";

export default class BeastController {
  #beastRepository;

  constructor() {
    this.#beastRepository = new BeastRepository();
  }

  async getAllBeasts(res) {
    try {
      const rows = await this.#beastRepository.getAllBeasts();
      res.json(rows);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
