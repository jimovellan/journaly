class DateNormalized
{
    
    months = ['','Enero','Febrero','Marzo','Abril','Mayo','Junio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']
    WeekDay = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
    
    constructor(dateStr){
        
        var date = new Date(dateStr);
        
        this.year = date.getFullYear();
        this.mounth =  this.months[date.getMonth()];
        this.dayOfWeek = this.WeekDay[date.getDay()];
        this.day = date.getDate();
        this.yearAndDayOfWeek = `${this.year},${this.dayOfWeek}`;
    }

}

export default DateNormalized