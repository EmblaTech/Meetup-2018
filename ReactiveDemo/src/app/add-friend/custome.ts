export class Custome {
  static unique(control) {
    const db = ['angular@meetup.lk'];

    return new Promise( resolve => {
      setTimeout(() => {
        if(db.indexOf(control.value) !== -1){
          resolve({unique: false});
        }
        resolve(null);
      }, 4000);
    });
  }
}
