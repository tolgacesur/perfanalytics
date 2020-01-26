export default class Metric {

    constructor(details){
        this._id = details._id;
        this.token = details.token;
        this.url = details.url;

        this.data = details.data;
        this.createdAt = new Date(details.createdAt);
    }
}