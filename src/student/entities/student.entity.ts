import { Column,CreateDateColumn,Entity,PrimaryGeneratedColumn,UpdateDateColumn,} from 'typeorm';

@Entity('students')
export class Student {
    @PrimaryGeneratedColumn('increment', {name: 'id'})
    id: number;


    @Column('varchar', {
        nullable: false,
        name: 'studentName',
    })
    studentName: string;


    @Column('int',{
        nullable: false,
        name: 'mobileNumber',  
    })
    mobileNumber: number;


    @Column('varchar',{
        nullable: false,
        name: 'email',
    })
    email:string;
}
