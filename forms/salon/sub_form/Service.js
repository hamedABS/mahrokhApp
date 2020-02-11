export class Service {

    constructor(id, name, startDate, time, personnelName, price, serviceTime) {
        this.id = id;
        this.name = name;
        this.startDate = startDate;
        this.time = time;
        this.personnelName = personnelName;
        this.price = price;
        this.serviceTime = serviceTime;
    }


    equals(service) {
        if (service.id = this.id) {
            return true
        } else return false
    }
}
