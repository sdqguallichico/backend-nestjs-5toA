import { DataSourceEnum, RepositoryEnum } from '@shared/enums';
import { RequirementRequestEntity } from '../entities/requirement-request.entity';

export const ventasProviders = [
  {
    provide: RepositoryEnum.PRODUCT_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(ProductEntity),
    inject: [DataSourceEnum.PG_DATA_SOURCE],
  },
  {
    provide: RepositoryEnum.PRODUCT_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(CategoryEntity),
    inject: [DataSourceEnum.PG_DATA_SOURCE],
  },

  
 
]