import BeastRepository from "../repository/beasts.repository.js";

export default class BeastController {
  #beastRepository;

  constructor() {
    this.#beastRepository = new BeastRepository();
  }

  async getAllBeasts(req, res) {
    try {
      const limit = parseInt(req.query.limit) || 10;
      const page = parseInt(req.query.page) || 1;
      const offset = (parseInt(page) - 1) * limit;
      const beasts = await this.#beastRepository.getAllBeasts(limit, offset);

      res.json(beasts);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getBeastById(req, res) {
    try {
      const beastId = parseInt(req.params.beastId);
      const beast = await this.#beastRepository.getBeastById(beastId);

      res.json(beast);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getBeastsByCategory(req, res) {
    try {
      const category = req.params.beastCategory;
      const beasts = await this.#beastRepository.getBeastsByCategory(category);

      res.json(beasts);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
