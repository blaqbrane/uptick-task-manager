import { TaskI } from "../../types/task";
export const single : TaskI =  {
    id:0,
    title : '',
    Participant : '',
    dateCreated : '',
    category: '',
    desc:''
}

export const TaskData:TaskI[] = [
    {
        id:1,
        title : 'System Design',
        Participant : 'Mary',
        dateCreated : '7/10/2024',
        category: 'to-do',
        desc :'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, ipsum optio fugiat reiciendis, nostrum a dignissimos reprehenderit enim minus libero ipsam! Suscipit labore eveniet laudantium iste quas molestiae harum atque?'
    },
    {
        id:2,
        title : 'Create Task',
        Participant : 'Mesh',
        dateCreated : '7/10/2024',
        category: 'done',
        desc :'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, ipsum optio fugiat reiciendis, nostrum a dignissimos reprehenderit enim minus libero ipsam! Suscipit labore eveniet laudantium iste quas molestiae harum atque?'
    },
    {
        id:3,
        title : 'Fix Error',
        Participant : 'kezz',
        dateCreated : '7/10/2024',
        category: 'in-progress',
        desc :'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, ipsum optio fugiat reiciendis, nostrum a dignissimos reprehenderit enim minus libero ipsam! Suscipit labore eveniet laudantium iste quas molestiae harum atque?'
    },
    {
        id:4,
        title : 'Check Jira',
        Participant : 'Nerry',
        dateCreated : '7/10/2024',
        category: 'to-do',
        desc :'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, ipsum optio fugiat reiciendis, nostrum a dignissimos reprehenderit enim minus libero ipsam! Suscipit labore eveniet laudantium iste quas molestiae harum atque?'
    },
    {
        id:5,
        title : 'About Page',
        Participant : 'Nerry',
        dateCreated : '7/10/2024',
        category: 'to-do',
        desc :'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, ipsum optio fugiat reiciendis, nostrum a dignissimos reprehenderit enim minus libero ipsam! Suscipit labore eveniet laudantium iste quas molestiae harum atque?'
    },
]

export const taskStage = [
    {
        id:1,
        title : 'to-do',
        label:'Todo'
    },
    {
        id:2,
        title : 'in-progress',
        label:'In Progress'
    },
    {
        id:3,
        title : 'done',
        label:'Done'
    },
    {
        id:4,
        title : 'frozen',
        label:'Frozen'
    }
]