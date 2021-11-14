import sampleObj.Player;

import java.io.StringBufferInputStream;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class ComparePrtc {
    public static void main(String[] args) {
        List<Player> playerList = new ArrayList<>();

        playerList.add(new Player("Alice", 1000));
        playerList.add(new Player("Bob", 982));
        playerList.add(new Player("Chloe", 1090));
        playerList.add(new Player("Dale", 982));
        playerList.add(new Player("Eric", 1018));

        System.out.println("score print");
        playerList.stream().mapToInt(x -> x.getScore()).forEach(System.out::println);

        int num = playerList.stream().mapToInt(x -> x.getScore()).filter(x -> x > 1000).reduce(0, (a, b) -> a + b);
        System.out.println("num = " + num);
        int[] numa = playerList.stream().mapToInt(x -> x.getScore()).toArray();

        System.out.println("sort =" + Arrays.toString(numa));
        Arrays.sort(numa);

        System.out.println("sort=" + Arrays.toString(numa));
        System.out.println("num = " + num);

        List<Integer> list = Stream.iterate(0, n -> n + 1).limit(10).collect(Collectors.toList());

        System.out.println("list = " + list);
        int[] arraya = (Stream.iterate(1, n -> n + 1).limit(10)).mapToInt(i -> i).toArray();

        System.out.println("not reversed = " + list);

        Collections.reverse(list);
        System.out.println("reversed = " + list);

        /**
         * Collector는 collect에서 필요한 메서드를 정의해 놓은 인터페이스 mapping () / toList () / toMap ()
         * / toCollection(); counting() / summingInt() / averagingInt() / maxBy() minBy
         * () summarizingInt(); joining() reducing()
         */

        String[] word1 = { "A", "B" };
        String[] word2 = { "C", "D" };
        String[] resultWord;
        resultWord = Stream.concat(Arrays.stream(word1), Arrays.stream(word2)).toArray(String[]::new);

        String[] result2 = new String[word1.length + word2.length];
        System.arraycopy(word1, 0, result2, 0, word2.length);
    }
}
