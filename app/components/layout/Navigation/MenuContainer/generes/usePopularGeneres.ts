import { IMenuItem } from './../menu.interface';
import { GenreService } from "@/services/genre.service";
import { useQuery } from "react-query"
import { getGenreUrl } from '@/config/url.config';

export const usePopularGeneral = () => {
    const queryData = useQuery('popular genre menu', () => GenreService.getAll(), {
        select: ({data}) => data.map(genre => ({
            icon: genre.icon,
            link: getGenreUrl(genre.slug),
            title: genre.name
        } as IMenuItem)).splice(0, 4)
    })
    return queryData;
}