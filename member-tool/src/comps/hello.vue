<script setup lang="ts">
import { ref } from 'vue'
import { Button, Space } from 'view-ui-plus'

defineProps<{ msg: string }>()

const count = ref(0)
</script>
<script lang="ts">
import { ref } from 'vue'
import { Button, Space, Slider } from 'view-ui-plus'

function WebSocketProxy(url) {
    this.url = url || 'ws://localhost:3000/member'
    this.socket = undefined
    this.messages = []
}

WebSocketProxy.prototype.create = function createSocket() {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const self = this
    return new Promise((resolve, reject) => {
        if (!WebSocket) {
            console.log("Sorry! Your browser doesn't support WebSocket")
            return
        }
        if (this.socket) {
            console.log('Connection already exist')
            console.log(this.socket)
            return
        }

        try {
            this.log(`create socket with url: ${this.url}`)
            this.socket = new WebSocket(this.url)

            console.log(this.socket)
            // 连接开启
            this.socket.onopen = function (e) {
                console.log('on open')
                resolve(this)
            }
            // 连接错误
            this.socket.onerror = function (e) {
                console.log('on error')
                self.close()
                reject(e)
            }
            // 消息通知
            this.socket.onmessage = function ({ data: msg }) {
                self.messages.push(msg)
                self.log('receive message')
                console.log(msg)
            }
        } catch (err) {
            console.log(err)
            this.close()
        }
    })
}

WebSocketProxy.prototype.send = function sendMessage(msg) {
    if (!this.socket) {
        this.log("socket doesn't exist")
        return
    }
    const msg2 = msg || 'default message'
    this.socket.send(msg2)
    this.log('message sent')
}

WebSocketProxy.prototype.close = function closeSocket() {
    if (!this.socket) {
        this.log("socket doesn't exist")
        return
    }
    this.socket.close()
    this.socket = undefined
    this.log('socket close')
}

WebSocketProxy.prototype.log = function (msg) {
    const prefix = '[WebSocketProxy]'
    console.log(`${prefix}${msg}`)
}


export default {
  data() {
    return {
      formValidate: {
        minQuitTimeout: 5000,
        maxQuitTimeout: 60000,
        minGroupCount: 10,
        maxGroupCount: 250,
        minPerGroup: 1,
        maxPerGroup: 19,

        name: '',
        mail: '',
        city: '',
        gender: '',
        interest: [],
        date: '',
        time: '',
        desc: '',
      },
      ruleValidate: {
        name: [
          {
            required: true,
            message: 'The name cannot be empty',
            trigger: 'blur',
          },
        ],
        mail: [
          {
            required: true,
            message: 'Mailbox cannot be empty',
            trigger: 'blur',
          },
          { type: 'email', message: 'Incorrect email format', trigger: 'blur' },
        ],
        city: [
          {
            required: true,
            message: 'Please select the city',
            trigger: 'change',
          },
        ],
        gender: [
          {
            required: true,
            message: 'Please select gender',
            trigger: 'change',
          },
        ],
        interest: [
          {
            required: true,
            type: 'array',
            min: 1,
            message: 'Choose at least one hobby',
            trigger: 'change',
          },
          {
            type: 'array',
            max: 2,
            message: 'Choose two hobbies at best',
            trigger: 'change',
          },
        ],
        date: [
          {
            required: true,
            type: 'date',
            message: 'Please select the date',
            trigger: 'change',
          },
        ],
        time: [
          {
            required: true,
            type: 'string',
            message: 'Please select time',
            trigger: 'change',
          },
        ],
        desc: [
          {
            required: true,
            message: 'Please enter a personal introduction',
            trigger: 'blur',
          },
          {
            type: 'string',
            min: 20,
            message: 'Introduce no less than 20 words',
            trigger: 'blur',
          },
        ],
      },
    }
  },
  computed: {
    groupRange: {
      // getter
      get() {
        return [this.formValidate.minGroupCount, this.formValidate.maxGroupCount]
      },
      // setter
      set(newValue) {
        const [minGroupCount, maxGroupCount] = newValue;
        this.formValidate.minGroupCount = minGroupCount;
        this.formValidate.maxGroupCount = maxGroupCount;
      }
    },
    perGroupRange: {
      // getter
      get() {
        return [this.formValidate.minPerGroup, this.formValidate.maxPerGroup]
      },
      // setter
      set(newValue) {
        const [minPerGroup, maxPerGroup] = newValue;
        this.formValidate.minPerGroup = minPerGroup;
        this.formValidate.maxPerGroup = maxPerGroup;
      }
    },
    quitTimeoutRange: {
      // getter
      get() {
        return [this.formValidate.minQuitTimeout, this.formValidate.maxQuitTimeout]
      },
      // setter
      set(newValue) {
        const [minQuitTimeout, maxQuitTimeout] = newValue;
        this.formValidate.minQuitTimeout = minQuitTimeout;
        this.formValidate.maxQuitTimeout = maxQuitTimeout;
      }
    },
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('Success!')
          void (async () => {
            console.log(this.formValidate)
            const data = {
              minQuitTimeout: this.formValidate.minQuitTimeout,
              maxQuitTimeout: this.formValidate.maxQuitTimeout,
              minGroupCount: this.formValidate.minGroupCount,
              maxGroupCount: this.formValidate.maxGroupCount,
              minPerGroup: this.formValidate.minPerGroup,
              maxPerGroup: this.formValidate.maxPerGroup,
            }

            const json = JSON.stringify(data)

            const r = await fetch('/member-api/add', {
              method: 'POST',
              body: json,
              headers: {
                'content-type':'application/json'
              },
            })
            const res = await r.json()
            console.log(res)
          })()

        } else {
          this.$Message.error('Fail!')
        }
      })
    },
    handleStop() {
      void (async () => {
        const data = {}
        const body = JSON.stringify(data)

        const r = await fetch('/member-api/stop', {
          method: 'POST',
          body,
          headers: { 'content-type':'application/json' },
        })
        const res = await r.json()
        console.log(res)
      })()
    },
    handleStart() {
      void (async () => {
        const data = {}
        const body = JSON.stringify(data)

        const r = await fetch('/member-api/start', {
          method: 'POST',
          body,
          headers: { 'content-type':'application/json' },
        })
        const res = await r.json()
        console.log(res)
      })()
    },

    handleConn() {
      const proxy = new WebSocketProxy('ws://127.0.0.1:3000/conn')
      proxy.create().then(() => {
          proxy.send('test')
      })
    },

    handleReset(name) {
      this.$refs[name].resetFields()
    },
  },
}
</script>

<template>
  <Space direction="vertical">
    <Form
      ref="formValidate"
      :model="formValidate"
      :rules="ruleValidate"
      :label-width="80"
    >
      <FormItem label="组数" prop="groupRange">
        <InputNumber :max="750" :min="1" v-model="formValidate.minGroupCount" />
        -
        <InputNumber
          :max="1500"
          :min="10"
          v-model="formValidate.maxGroupCount"
        />
        <Slider
          range
          v-model="groupRange"
          :min="1"
          :max="1500"
          :marks="{ 250: '250', 500: '500', 750: '750', 1000: '1000' }"
        ></Slider>
      </FormItem>

      <FormItem label="每组人数" prop="perGroupRange">
        <InputNumber :max="750" :min="1" v-model="formValidate.minPerGroup" />
        -
        <InputNumber :max="1500" :min="10" v-model="formValidate.maxPerGroup" />
        <Slider
          range
          v-model="perGroupRange"
          :min="1"
          :max="1500"
          :marks="{ 250: '250', 500: '500', 750: '750', 1000: '1000' }"
        ></Slider>
      </FormItem>

      <FormItem label="参会时间" prop="quitTimeoutRange">
        <Slider
          range
          v-model="quitTimeoutRange"
          :min="5000"
          :max="60000"
          :marks="{ 5000: '5秒', 20000: '20秒', 40000: '40秒', 60000: '1分钟' }"
        ></Slider>
      </FormItem>

      <!--
      <FormItem label="City" prop="city">
        <Select v-model="formValidate.city" placeholder="Select your city">
          <Option value="beijing">New York</Option>
          <Option value="shanghai">London</Option>
          <Option value="shenzhen">Sydney</Option>
        </Select>
      </FormItem>
      <FormItem label="Date">
        <Row>
          <Col span="11">
            <FormItem prop="date">
              <DatePicker
                type="date"
                placeholder="Select date"
                v-model="formValidate.date"
              ></DatePicker>
            </FormItem>
          </Col>
          <Col span="2" style="text-align: center">-</Col>
          <Col span="11">
            <FormItem prop="time">
              <TimePicker
                type="time"
                placeholder="Select time"
                v-model="formValidate.time"
              ></TimePicker>
            </FormItem>
          </Col>
        </Row>
      </FormItem>
      <FormItem label="Gender" prop="gender">
        <RadioGroup v-model="formValidate.gender">
          <Radio label="male">Male</Radio>
          <Radio label="female">Female</Radio>
        </RadioGroup>
      </FormItem>
      <FormItem label="Hobby" prop="interest">
        <CheckboxGroup v-model="formValidate.interest">
          <Checkbox label="Eat"></Checkbox>
          <Checkbox label="Sleep"></Checkbox>
          <Checkbox label="Run"></Checkbox>
          <Checkbox label="Movie"></Checkbox>
        </CheckboxGroup>
      </FormItem>
      <FormItem label="Desc" prop="desc">
        <Input
          v-model="formValidate.desc"
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 5 }"
          placeholder="Enter something..."
        ></Input>
      </FormItem>
-->
      <FormItem>
        <Button type="primary" @click="handleSubmit('formValidate')">
          装订
        </Button>
        <Button type="success" @click="handleStart('formValidate')">
          启动
        </Button>
        <Button type="normal" @click="handleStop()">
          停止
        </Button>
        <Button type="normal" @click="handleConn()">
          测试
        </Button>
      </FormItem>
    </Form>
  </Space>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
