// import axios from "axios";

export class Repository {
    static async all(route) {
        try {
            const response = await axios.get(route);
            return response;
        } catch (error) {
            return error;
        }
    }

    static async getPaginate(route, param) {
        try {
            const response = await axios.get(route + param);
            return response;
        } catch (error) {
            return error;
        }
    }

    static async get(route, param) {
        try {
            const response = await axios.get(route + param);
            return response;
        } catch (error) {
            return error;
        }
    }

    static async create(route, data) {
        try {
            const response = await axios.post(route, data);
            return response;
        } catch (error) {
            return error;
        }
    }

    static async update(route, id, data) {
        try {
            const response = await axios.put(route, id, data);
            return response;
        } catch (error) {
            return error;
        }
    }

    static async delete(route, id) {
        try {
            const response = await axios.delete(route, id);
            return response;
        } catch (error) {
            return error;
        }
    }
}
