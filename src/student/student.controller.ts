import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Students')
@Controller('/student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post('/addStudent')
  create(@Body() createStudentDto: CreateStudentDto) {
    return this.studentService.create(createStudentDto);
  }

  @Get()
  findAll() {
    return this.studentService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.studentService.findOne(+id);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentService.remove(+id);
  }
}
