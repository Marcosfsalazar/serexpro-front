import http from "../http-common";

class PlanDataService {
  getAll() {
    return http.get("/plans");
  }

  get(id) {
    return http.get(`/plans/${id}`);
  }

  create(data) {
    return http.post("/plans", data);
  }

  update(id, data) {
    return http.put(`/plans/${id}`, data);
  }

  delete(id) {
    return http.delete(`/plans/${id}`);
  }

  deleteAll() {
    return http.delete(`/plans`);
  }

  findByName(name) {
    return http.get(`/plans?name=${name}`);
  }
}

export default new PlanDataService();