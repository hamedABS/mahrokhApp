export class Service {

    constructor(id, name, startDate, time, personnelName, note) {
        this.id = id;
        this.name = name;
        this.startDate = startDate;
        this.time = time;
        this.personnelName = personnelName;
        this.note = note;
    }


    equals(service) {
        if (service.id = this.id) {
            return true
        } else return false
    }
}
