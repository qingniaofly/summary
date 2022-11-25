// import express from 'express'
import mockjs from 'mockjs'
import { nanoid } from 'nanoid'

const { Random: _r } = mockjs

const mockGetChatroomMembersByTag = (params) => {
  const { minPerGroup, maxPerGroup, minGroupCount, maxGroupCount } = params
  const groupCount = minGroupCount + Math.floor(Math.random() * maxGroupCount)
  const len = minPerGroup + Math.floor(Math.random() * maxPerGroup)
  const max = len * groupCount

  const chatroomData = {
    tagMemberReq: {
      tag: 'viewer',
      limit: 100,
      time: 0,
    },
    members: [],
  }

  for (let i = 0; i < max; i++) {
    // const id = nanoid() // => "V1StGXR8_Z5jdHi6B-myT"
    const mobile = mockjs.mock(/1[35789]\d{9}/)
    const nick = _r.pick([
      _r.cname(),
      _r.cname(),
      _r.cname(),
      _r.name(),
      _r.name(),
      _r.string('lower', 5),
      _r.string('number', 11),
      _r.string('symbol', 5),
    ])

    const account = mockjs.mock(/[a-f0-9]{32}/) // 30ca23456a1844f99764736ca1ffa721
    const avatar = _r.image('48x48', '#50B347', '#FFF', 'NB')
    const countryCode = _r.pick(['86', '86', '86', '886', '853', '852'])
    const group = `${_r.city()}白名单分组`
    const company = `${_r.city()}分公司`
    const phone = mobile /* mockjs.mock(/0[1-9]{3}-[1-9][0-9]{7}/) */
    const email = _r.email()
    const department = `${_r.city()}部门` // _r.pick(['AAA部', 'BBB部', 'CCC部', 'DDD部', 'EEE部', 'FFF部'])
    const jobTitle = _r.pick(['某经理', '某总监', '某总裁', '某课长', '某执事', '某委员'])

    const customObj = {
      time: mockjs.mock('@datetime("T")'),
      roleId: mockjs.mock('@natural(1, 49)'),
      group: group,
      groupId: _r.increment(8888),
      company,
      department: department,
      name: nick,
      email,
      phone,
      country: countryCode,
      extraInfo: '{"btplRoleId":0,"position":null}',
      tag: 'viewer',
      groupName: group,
      mobile,
      countryCode,

      whitelistTag: {
        company,
        phone,
        countryCode,
        email,
        group_name: group,
        jobTitle,
        extraInfo: '{"position":"' + jobTitle + '"}',
      },
    }

    chatroomData.members.push({
      account: account,
      nick: nick,
      avatar: avatar,
      vcardLine: [nick, email, mobile, '', '', department, jobTitle, avatar].join('^'),
      custom: JSON.stringify(customObj),
      online: true,
      enterTime: Number(mockjs.mock('@datetime("T")')),
      tempMuted: false,
      tempMuteDuration: 0,
      type: 'guest',
    })
  }

  return chatroomData
}

const router = function () {
  return {
    cache: [],
    params: {
      minQuitTimeout: 5000,
      maxQuitTimeout: 60000,
      minGroupCount: 10,
      maxGroupCount: 999,
      minPerGroup: 1,
      maxPerGroup: 19,
    },
    connected: false,
    timer: 0,
    receive(msg) {
      console.log(msg)
      if (msg === 'getChatroomMembersByTag') {
        this.connected = true
        const data = mockGetChatroomMembersByTag(this.params)
        msg = JSON.stringify(data)
        this.onmessage(msg)
        return
      }

      this.onmessage(msg)
    },

    onmessage() {},
    start() {
      this.timer = setInterval(() => {
        const { minPerGroup, maxPerGroup } = this.params
        const len = minPerGroup + Math.floor(Math.random() * maxPerGroup)
        const { minQuitTimeout, maxQuitTimeout } = this.params
        const now = Date.now()

        const list = []
        for (let i = 0; i < len; i++) {
          const id = nanoid() // => "V1StGXR8_Z5jdHi6B-myT"
          const nick = _r.pick([
            _r.cname(),
            _r.cname(),
            _r.cname(),
            _r.name(),
            _r.name(),
            _r.string('lower', 5),
            _r.string('number', 11),
            _r.string('symbol', 5),
          ])
          const mobile = mockjs.mock(/1[35789]\d{9}/)
          const timeout =
            minQuitTimeout + Math.floor(Math.random() * maxQuitTimeout)
          const expire = now + timeout

          // [
          //   {
          //     "chatroomId": "2334836055",
          //     "idClient": "8fa552fd-4a8a-4ade-af2a-c953aa22a5f6",
          //     "from": "1162860068-445267201",
          //     "fromCustom": "",
          //     "fromClientType": "Android",
          //     "time": 1663996376485,
          //     "type": "notification",
          //     "text": "",
          //     "resend": false,
          //     "status": "success",
          //     "attach": {
          //         "type": "memberExit",
          //         "from": "1162860068-445267201",
          //         "fromNick": "张三",
          //         "to": [
          //             "1162860068-445267201"
          //         ],
          //         "toNick": [
          //             "张三"
          //         ]
          //     },
          //     "flow": "in"
          //   }
          // ]

          const member = {
            chatroomId: '2444560237',
            idClient: _r.guid(),
            from: id, // thirdId
            fromCustom: `{"time":1666265317449,"group":"${_r.city()}分组","groupId":${_r.natural()},"company":"${_r.city()}公司","name":"${nick}","email":"${_r.email()}","phone":"${mobile}","country":"86","tag":"viewer","groupName":"${_r.province()}组","mobile":"${mobile}","countryCode":"86","roleId":${_r.pick([0,1,2,3])}}`,
            fromClientType: 'Web',
            time: 1666851969870,
            type: 'notification',
            text: '',
            resend: false,
            status: 'success',
            attach: {
              type: 'memberEnter',
              from: id,
              fromNick: nick,
              to: [id],
              toNick: [nick],
              gaged: false,
              tempMuted: false,
              tempMuteDuration: 0,
            },
            flow: 'out',
            notifyTargetTags: '{"tag":"viewer"}',
            expire,
          }

          this.cache.push(member)
          list.push(member)
        }

        const expiredList = this.cache.filter((e) => e.expire < now)
        this.cache = this.cache.filter((e) => e.expire > now)

        expiredList.forEach((e) => {
          e.attach.type = 'memberExit'
          list.push(e)
        })

        this.onmessage(JSON.stringify(list))
      }, 1000)

      return Promise.resolve({ code: 200 })
    },
    stop() {
      return new Promise((resolve) => {
        clearInterval(this.timer)
      })
    },
    load(params) {
      return new Promise((resolve) => {
        console.log(params)
        // const { minQuitTimeout = 5000, maxQuitTimeout = 60000, minGroupCount = 10, maxGroupCount = 999, minPerGroup = 10, maxPerGroup = 999 } = params

        this.params = Object.assign({}, this.params, params)
        resolve()
      })
    },
  }
}

export default router
