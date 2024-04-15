import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { Entity, Repository } from 'typeorm';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ) {}

  async create(createStudentDto: CreateStudentDto): Promise<Student> {
    // const newStudent = this.studentRepository.create(createStudentDto)
    try{
      const entityObj = new Student();
      entityObj.studentName = createStudentDto.studentName;
      entityObj.mobileNumber = createStudentDto.mobileNumber;
      entityObj.email = createStudentDto.email;
      console.log(entityObj);
    return await this.studentRepository.save(entityObj);
    }
    catch(error){
      throw new Error('Failed to create leave: ')
    }
  }

  async findAll(): Promise<Student[]> {
    return await this.studentRepository.find();
  }

  async remove(id: number): Promise<void> {
    // Ensure the student exists before attempting to remove it
    const studentToRemove = await this.studentRepository.findOne({where:{id}});
    if (!studentToRemove) {
      throw new Error(`Student with id ${id} not found.`);
    }

    await this.studentRepository.remove(studentToRemove);
  }
}
