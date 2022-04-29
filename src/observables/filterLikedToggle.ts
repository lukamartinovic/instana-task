import { BehaviorSubject } from "rxjs";

const filterLikedToggle = new BehaviorSubject<boolean>(false);

export default filterLikedToggle;
