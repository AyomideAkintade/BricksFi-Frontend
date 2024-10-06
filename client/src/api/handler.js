import { BrCookies } from "../utils/storage/cookies";
import { baseUrl } from "./base";


class API {
    constructor() {
      this.baseUrl = baseUrl;
      this.get = this.get.bind(this);
      this.post = this.post.bind(this);
    }

    #_throwError(error) {
        throw new Error(error);
    }

    async _getHeaders(usesToken, { isGetMethod = true } = {}) {
        const headers = {};
        if (!isGetMethod) {
            headers['Content-Type'] = 'application/json';
        }

        if (usesToken) {
            try {
              const cookies = new BrCookies(document);
              const token = await cookies.getCookie('authToken');
              headers['Authorization'] = `Bearer ${token}`;

            } catch (error) {
              console.log(error);
                throw new Error("Failed to obtain authentication token.");
            }
        }

        return headers;
    }
  
    async get(endpoint, params, { usesToken = false }) {
        try {
          const queryParams = new URLSearchParams(params);
          const response = await fetch(`${this.baseUrl}/${endpoint}?${queryParams.toString()}`, {
                headers: await this._getHeaders(usesToken),
            });

            // if (!response.ok) {
            //   return await response.json();
            // }

            const responseBody =  await response.json();
            this.processResponse(responseBody);
            return responseBody;
      
        } catch (error) {
            if(error.response) {
              return { error: error.response };
            }
            this.#_throwError(`Error during GET request: ${error.message}`);

        }
    }
    /**
     * add usingFormData = false when you're not sending a formdata, it'll change json to a string
     * @param {string} endpoint 
     * @param {FormData | JSON} data 
     * @param {boolean} usesToken 
     * @param {bool} usingFormdata default true
     * @returns 
     */  
    async post(endpoint, data, usesToken, { usingFormData = true } = {}) {

      let requestBody;
      if (usingFormData) {
          requestBody = JSON.stringify(Object.fromEntries(data));;
      } else {
          requestBody = JSON.stringify(data);
      }

        try {
            const response = await fetch(`${this.baseUrl}/${endpoint}`, {
              method: 'POST',
              headers: await this._getHeaders(usesToken, { isGetMethod : false }),
              body: requestBody
            });

            // if (!response.ok) {
            //   throw new Error(`POST request failed with status: ${response.status}`);
            // }

            const responseBody =  await response.json();
            this.processResponse(responseBody);
            return responseBody;

            
      
        } catch (error) {
            if(error.response) {
              return { error: error.response };
            }
            this.#_throwError(`Error during POST request: ${error.message}`);

        }
    }
  
    async options(endpoint) {
      try {
        const response = await fetch(`${this.baseUrl}/${endpoint}`, {
          method: 'OPTIONS',
          headers: await this._getHeaders(true, { isGetMethod : false} )
        });
        if (!response.ok) {
          throw new Error(`OPTIONS request failed with status: ${response.status}`);
        }
        return await response.json();
      } catch (error) {
        if(error.response) {
          return { error: error.response };
        }
        throw new Error(`Error during OPTIONS request: ${error.message}`);
      }
    }

    processResponse(response){
      if(response['message'] && (response['message'] === "Unauthorized access" || response['message'] === "Access forbidden")){
        const cookies = new BrCookies(document);
        cookies.removeAllCookies();
        window.location = "/login"
      }
    }
}
   

export default API;