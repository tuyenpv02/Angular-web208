import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroDetailComponent } from "../hero-detail/hero-detail.component";


@Component({
    selector: 'app-hero',
    standalone: true,
    templateUrl: './hero.component.html',
    styleUrl: './hero.component.css',
    imports: [CommonModule, HeroDetailComponent]
})
export class HeroComponent {
  heros : Array<any> = [
    {id:1, name:"tuyên", gender:1, img:"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/452.jpg"},
    {id:2, name:"Thành", gender:1,  img:"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/452.jpg"},
    {id:3, name:"vũ", gender:0,  img:"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/452.jpg"} 
  ]

  addHero = {
    id:0,
    name:null,
    img:null,
    gender:1,
  }

  addHeroName(event:any){
    this.addHero.name =event.target.value;
  }
  addHeroImg(event:any){
    this.addHero.img =event.target.value;
  }
  addHeroGender(event:any){
    this.addHero.gender =event.target.value;
  }

  addNewHero(){
    // lấy ra id lớn nhất
    let maxId = Number(this.heros.length );
    this.addHero.id  = maxId;
    //chuyển gender về dạng số
    this.addHero.gender = Number(this.addHero.gender);
    // thêm vào mảng heros
    this.heros.push(this.addHero);

    this.addHero = {
      id:0,
      name:null,
      img:null,
      gender:1,
    }
  }
  idEdit = { id:0,
    name:null,
    img:null,
    gender:1,};
  editHero(h:any){
    this.idEdit= h;
    this.addHero= h;
    // this.idEdit = h.id;
  }
  updateHero(){
    console.log(this.editHero);
    console.log(this.addHero);
    // this.idEdit.gender = Number(this.addHero.gender);
    // this.heros[this.idEdit.id] = (this.addHero);
  }
 
  removeHero(h: any) {
    const check = window.confirm("Xác nhận");
    if(check){
      this.heros = this.heros.filter((val)=>{
        return val.id != h.id;
      })
    }
  }

  testEvent(){
    alert('test event');
  }


}
