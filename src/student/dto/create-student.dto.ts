import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateStudentDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  @IsNotEmpty()
  studentName: string;

  @ApiProperty()
  @IsNotEmpty()
  mobileNumber: number;

  @ApiProperty()
  @IsNotEmpty()
  email: string;
}
