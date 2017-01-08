import sprintf from 'sprintf-js';

/**
 * Service to communicate with Synology API
 */
class ApiService {

    /**
     * Create an api service with config object like
     *
     *  let apiConfig = {
     *      synologyURL: 192.168.0.10,
     *      synologyPort: 5000,
     *      apiName: 'DownloadStation'
     *  };
     *
     * @param {object} apiConfig object with api config
     */
    constructor(apiConfig) {
        let url = "http://%s:%s/webapi/%s/task.cgi?api=SYNO.%s";

        this.apiConfig = Object.assign(apiConfig, {});

        this.isLogged = false;
        this.apiUrl = sprintf.sprintf(url, this.apiConfig.synologyURL, this.apiConfig.synologyPort, this.apiConfig.apiName, this.apiConfig.apiName);
    }

    /**
     * Get task url with config object like
     *
     *  let methodConfig = {
     *      name: 'DownloadStation',
     *      options: [
     *          {name: 'version', value: 1},
     *          {name: 'method', value: 'list'},
     *          {name: 'additional', value: 'detail,file'}
     *      ]
     *  };
     *
     * @param {object} task api task config object like
     * /webapi/DownloadStation/task.cgi?api=SYNO.DownloadStation.Task&version=1&method=list&additional=detail,file
     *
     * @returns {string} task api URL
     */
    getTaskUrl(task) {
        let taskUrl = this.apiUrl + '.' + task.name;

        task.options.forEach((item) => {
            taskUrl += '&' + item.name + '=' + item.value;
        });

        return taskUrl;
    }

    /**
     * Return api login url
     *
     * @returns {string} login url
     */
    getLoginUrl() {
        let urlPattern = "http://%s:%s/webapi/auth.cgi?api=SYNO.API.Auth&version=2&method=login&account=%s&passwd=%s&session=%s&format=cookie";

        return sprintf.sprintf(urlPattern, this.apiConfig.synologyURL, this.apiConfig.synologyPort, this.apiConfig.account, this.apiConfig.password, this.apiConfig.apiName);
    }


}

export default ApiService;