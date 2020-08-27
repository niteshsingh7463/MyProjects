import { allMsg } from './myDataFile';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lesson';
  constructor(private router: Router) {

  }
  allMsgData = allMsg.map(n1 => ({ id: n1.id, sent: n1.sent, from: n1.from, to: n1.to, subject: n1.subject, text: n1.text, folder: n1.folder, selected: false }));

  Inbox = this.allMsgData.filter(n1 => n1.folder == 'Inbox');
  Sent = this.allMsgData.filter(n1 => n1.folder == 'Sent');
  Drafts = this.allMsgData.filter(n1 => n1.folder == 'Drafts');
  Work = this.allMsgData.filter(n1 => n1.folder == 'Work');
  Social = this.allMsgData.filter(n1 => n1.folder == 'Social');
  currDisplayArr = this.Inbox;
  cls1 = 'cls';
  cls2 = null;
  cls3 = null;
  cls4 = null;
  cls5 = null;
  composeFormBool = false;
  searchText = '';
  delBool = false;
  moveArr = ['Inbox', 'Sent', 'Drafts', 'Work', 'Social'];
  moveSelValue = null;
  msg = null;
  msgBool = null;
  to = null;
  subject = null;
  showMsg(item) {
    this.msg = item;
    this.msgBool = true;
    this.cls1 = null;
    this.cls2 = null;
    this.cls3 = null;
    this.cls4 = null;
    this.cls5 = null;
    this.composeFormBool = false; this.delBool = false;

  }
  ngOnInit() {
    // console.log(this.currDisplayArr)
  }
  displayMsg(n) {
    switch (n) {
      case 1:
        this.currDisplayArr = this.Inbox;
        this.cls1 = 'cls';
        this.cls2 = null;
        this.cls3 = null;
        this.cls4 = null;
        this.cls5 = null;
        this.composeFormBool = false;
        this.msgBool = false; this.delBool = false;
        break;
      case 2:
        this.currDisplayArr = this.Sent;
        this.cls1 = null;
        this.cls2 = 'cls';
        this.cls3 = null;
        this.cls4 = null;
        this.cls5 = null;
        this.composeFormBool = false; this.msgBool = false; this.delBool = false;
        break;
      case 3:
        this.currDisplayArr = this.Drafts;
        this.cls1 = null;
        this.cls2 = null;
        this.cls3 = 'cls';
        this.cls4 = null;
        this.cls5 = null;
        this.composeFormBool = false; this.msgBool = false;
        this.delBool = false;
        break;
      case 4:
        this.currDisplayArr = this.Work;
        this.cls1 = null;
        this.cls2 = null;
        this.cls3 = null;
        this.cls4 = 'cls';
        this.cls5 = null;
        this.composeFormBool = false; this.msgBool = false;
        this.delBool = false;
        break;
      case 5:
        this.currDisplayArr = this.Social;
        this.cls1 = null;
        this.cls2 = null;
        this.cls3 = null;
        this.cls4 = null;
        this.cls5 = 'cls';
        this.composeFormBool = false; this.msgBool = false;
        this.delBool = false;
        break;
    }
  }
  reply(item) {
    console.log('working')
    // this.currDisplayArr = this.Social;
    this.cls1 = null;
    this.cls2 = null;
    this.cls3 = null;
    this.cls4 = null;
    this.cls5 = null;
    this.to = item.to;
    this.subject = 'Re:' + item.subject;
    this.composeFormBool = true; this.msgBool = false;
    this.delBool = false;

  }

  btnCompose() {
    this.composeFormBool = true; this.msgBool = false;
    this.delBool = false;
  }
  composedSendEvent(data) {
    this.allMsgData.push(data);
    this.Sent.push(data);
    this.msg = data;
    this.composeFormBool = false; this.msgBool = true;
    this.delBool = false;
  }

  handle() {
    this.delBool = false;
    this.cls1 = null;
    this.cls2 = null;
    this.cls3 = null;
    this.cls4 = null;
    this.cls5 = null;
    this.composeFormBool = false; this.msgBool = false;
    let temp1 = this.allMsgData.filter(n1 => this.isMatch(n1));
    console.log(temp1)
    this.currDisplayArr = temp1;
    this.delBool = false;
  }

  isMatch(n1) {
    //-----------------------from match--------------------
    if (n1.from.slice(0, this.searchText.length).toUpperCase() == this.searchText.toUpperCase()) {
      console.log('1')
      return true;
    }
    //-------------------------To match----------------------
    if (n1.to.slice(0, this.searchText.length).toUpperCase() == this.searchText.toUpperCase()) {
      console.log('1')
      return true;
    }
    // ------------------------subject match---------------
    // console.log(n1.text.split(' ')[0].slice(0, 3))
    for (let i = 0; i < n1.subject.split(' ').length; i++) {
      if (n1.subject.split(' ')[i].slice(0, this.searchText.length).toUpperCase() == this.searchText.toUpperCase()) {
        console.log('2')
        return true;
      }
    }
    // --------------------------Msg natch------------------
    for (let i = 0; i < n1.text.split(' ').length; i++) {
      if (n1.text.split(' ')[i].slice(0, this.searchText.length).toUpperCase() == this.searchText.toUpperCase()) {
        console.log('3')
        return true;
      }
    }
  }

  showDel() {
    if (this.allMsgData.find(n1 => n1.selected == true) != undefined) {
      this.delBool = true;

    } else {
      this.delBool = false;
    }

  }

  move() {
    console.log('move')
    for (let i = 0; i < this.allMsgData.length; i++) {
      if (this.allMsgData[i].selected == true) {
        this.allMsgData[i].selected = false;
        this.allMsgData[i].folder = this.moveSelValue;
        this.delBool = false;

      }
    }
    // console.log(this.allMsgData)

    this.Inbox = this.allMsgData.filter(n1 => n1.folder == 'Inbox');
    this.Sent = this.allMsgData.filter(n1 => n1.folder == 'Sent');
    this.Drafts = this.allMsgData.filter(n1 => n1.folder == 'Drafts');
    this.Work = this.allMsgData.filter(n1 => n1.folder == 'Work');
    this.Social = this.allMsgData.filter(n1 => n1.folder == 'Social');
    if (this.moveSelValue == 'Inbox')
      this.displayMsg(1);
    if (this.moveSelValue == 'Sent')
      this.displayMsg(2);
    if (this.moveSelValue == 'Drafts')
      this.displayMsg(3);
    if (this.moveSelValue == 'Work')
      this.displayMsg(4);
    if (this.moveSelValue == 'Social')
      this.displayMsg(5);
    this.showDel();
  }
  del() {
    console.log('del')
    let moveSelvalue2 = '';
    for (let i = 0; i < this.allMsgData.length; i++) {
      if (this.allMsgData[i].selected == true) {
        moveSelvalue2 = this.allMsgData[i].folder;
        this.allMsgData.splice(i, 1);
      }
    }
    this.Inbox = this.allMsgData.filter(n1 => n1.folder == 'Inbox');
    this.Sent = this.allMsgData.filter(n1 => n1.folder == 'Sent');
    this.Drafts = this.allMsgData.filter(n1 => n1.folder == 'Drafts');
    this.Work = this.allMsgData.filter(n1 => n1.folder == 'Work');
    this.Social = this.allMsgData.filter(n1 => n1.folder == 'Social');
    if (moveSelvalue2 == 'Inbox')
      this.displayMsg(1);
    if (moveSelvalue2 == 'Sent')
      this.displayMsg(2);
    if (moveSelvalue2 == 'Drafts')
      this.displayMsg(3);
    if (moveSelvalue2 == 'Work')
      this.displayMsg(4);
    if (moveSelvalue2 == 'Social')
      this.displayMsg(5);
    this.showDel();

  }
}
