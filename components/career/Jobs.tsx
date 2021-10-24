import { Button, Space, Table, Typography } from "antd"
import { ColumnsType } from "antd/lib/table"
import moment from "moment"

type Job = {
  name: string
  designation: string
  deadline: string
  stipend: string
}

const data: Job[] = [
  {
    name: 'Amazon',
    designation: 'SDE',
    deadline: moment().add(1, 'day').toISOString(),
    stipend: '10000'
  },
  {
    name: 'Amazon',
    designation: 'SDE',
    deadline: moment().subtract(1, 'day').toISOString(),
    stipend: '20000'
  },
  {
    name: 'Amazon',
    designation: 'SDE',
    deadline: moment().toISOString(),
    stipend: '20000'
  },
]

const columns: ColumnsType<Job> = [
  {
    title: 'COMPANY NAME',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'OPENING NAME',
    dataIndex: 'designation',
    key: 'designation'
  },
  {
    title: 'DEADLINE',
    dataIndex: 'deadline',
    key: 'deadline',
    sortOrder: 'descend',
    sortDirections: [],
    sorter: (a, b) => moment(a.deadline).diff(moment(b.deadline)),
    render: (date: string) => moment(date).format('MMM Do YY')
  },
  {
    title: 'Stipend',
    dataIndex: 'stipend',
    key: 'stipend',
  },
  {
    title: 'ACTIONS',
    dataIndex: 'actions',
    key: 'actions',
    render: () => (
      <Space>
        <Button type='ghost'>Edit</Button>
        <Button type='ghost'>Delete</Button>
      </Space>
    )
  }
]

const Jobs = () => {
  
  return (
    <Table bordered style={{textAlign: 'center'}} columns={columns} dataSource={data} pagination={false} />
  )
}

export default Jobs