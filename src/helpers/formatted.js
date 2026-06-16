import moment from "moment"
import "moment/locale/es";

moment.locale("es");

export const formattedDate = (date) => {
    return moment(date).format('LL')
}