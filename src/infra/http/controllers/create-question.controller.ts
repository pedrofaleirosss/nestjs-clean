import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import z from "zod";
import { ZodValidationPipe } from "../pipes/zod-validation-pipe";
import { JwtAuthGuard } from "@/infra/auth/jwt-auth.guard";
import { PrismaService } from "@/infra/database/prisma/prisma.service";
import { CurrentUser } from "@/infra/auth/current-user-decorator";
import type { UserPayload } from "@/infra/auth/jwt.strategy";

const createQuestionBodySchema = z.object({
  title: z.string(),
  content: z.string(),
});

const bodyValidationPipe = new ZodValidationPipe(createQuestionBodySchema);

type CreateQuestionBodySchema = z.infer<typeof createQuestionBodySchema>;

@Controller("/questions")
@UseGuards(JwtAuthGuard)
export class CreateQuestionController {
  constructor(private prisma: PrismaService) {}

  @Post()
  async handle(
    @Body(bodyValidationPipe) body: CreateQuestionBodySchema,
    @CurrentUser() user: UserPayload
  ) {
    const { title, content } = body;
    const userId = user.sub;

    const slug = this.convertToSlug(title);

    await this.prisma.question.create({
      data: {
        authorId: userId,
        title,
        content,
        slug,
      },
    });
  }

  private convertToSlug(title: string): string {
    return title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");
  }
}
