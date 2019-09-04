import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { NavLink } from 'react-router-dom'

const useStyles = makeStyles({
    code: {
        backgroundColor: '#F2F3F4',
        fontSize: '0.875rem',
        fontFamily: "\"Roboto Mono\", \"monospace\"",
    },
    link: {
        color: "#0000EE"
    },
    note: {
        borderLeft: "6px solid #3f51b5",
        backgroundColor: "#ddffff"
    }
})

export default function How_ipfs_works() {
    const classes = useStyles();

    useEffect(() => {
        console.log("how ipfs works?")
        window.scrollTo(0, 0)
    }, []);


    return (
        <Grid container spacing={3}>
            <Grid key={0} xs={12} item>
                <Typography variant="h4"><b>How IPFS Works?</b></Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    IPFS is a peer-to-peer (p2p) storage network. Content is accessible through peers that might relay information or store it (or do both), and those peers can be located anywhere in the world. IPFS knows how to find what you ask for by its content address, rather than where it is.
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="h5">
                    <b>
                        There are three important things to understand about IPFS
                    </b>
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    Let’s first look at content addressing and how that content is linked together. This “middle” part of the IPFS stack is what connects the ecosystem together; everything is built on being able to find content via linked, unique identifiers.
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="h6">
                    <b>
                        1. Content addressing and linked data
                </b>
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    IPFS uses content addressing to identify content by what’s in it, rather than by where it’s located. Looking for an item by content is something you already do all the time. For example, when you look for a book in the library, you often ask for it by the title; that’s content addressing because you’re asking for what it is. If you were using location addressing to find that book, you’d ask for it by where it is: “I want the book that’s on the second floor, first stack, third shelf from the bottom, four books from the left.” If someone moved that book, you’d be out of luck!
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    It’s the same on the internet and on your computer. Right now, content is found by location, such as…
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <ul>
                    <li>
                        <Typography variant="body2">
                            <span className={classes.code}>https://en.wikipedia.org/wiki/Aardvark</span>
                        </Typography>
                    </li>
                    <br />
                    <li>
                        <Typography variant="body2">
                            <span className={classes.code}>/Users/Alice/Documents/term_paper.doc</span>
                        </Typography>
                    </li>
                    <br />
                    <li>
                        <Typography variant="body2">
                            <span className={classes.code}>C:\Users\Joe\My Documents\project_sprint_presentation.ppt</span>
                        </Typography>
                    </li>
                </ul>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    By contast, every piece of content that uses the IPFS protocol has a <NavLink className={classes.link} to="/ipfs/concepts/cid">content identifier</NavLink>, or CID, that is its hash. The hash is unique to the content that it came from, even though it may look short compared to the original content. If hashes are new to you, check out the <NavLink className={classes.link} to="/ipfs/concepts/hashes">concept guide on hashes</NavLink> for an introduction.
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    Content addressing through hashes has become a widely-used means of connecting data in distributed systems, from the commits that back your code to the blockchains that run cryptocurrencies. However, the underlying data structures in these systems are not necessarily interoperable.
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    This is where the <NavLink className={classes.link} link="/ipld/overview">IPLD project</NavLink> comes in. <b>Hashes identify content, and IPLD translates between data structures</b>. Since different distributed systems structure their data in different ways, IPLD provides libraries for combining pluggable modules (parsers for each possible type of IPLD node) to resolve a path, selector, or query across many linked nodes (allowing you explore data regardless of the underlying protocol). IPLD provides a way to translate between content-addressable data structures: “Oh you use Git-style, no worries, I can follow those links. Oh you use Ethereum, I got you, I can follow those links too!”
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    The IPFS protocol uses IPLD to get from raw content to an IPFS address. IPFS has its own preferences and conventions about how data should be broken up into a DAG (more on DAGs below!); IPLD links content on the IPFS network together using those conventions.
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    <b>
                        Everything else in the IPFS ecosystem builds on top of this core concept: linked, addressable content is the fundamental connecting element that makes the rest work.
                    </b>
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="h6">
                    <b>
                        2. IPFS turns files into DAGs
                    </b>
                </Typography>
            </Grid>


            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    IPFS and many other distributed systems take advantage of a data structure called <a target="_blank" href="https://en.wikipedia.org/wiki/Directed_acyclic_graph">directed acyclic graphs</a>, or DAGs. Specifically, they use Merkle-DAGs, which are DAGs where each node has an identifier that is a hash of the node’s contents. Sound familiar? This refers back to the CID concept that we covered in the previous section. Another way to look the this CID-linked-data concept: identifying a data object (like a Merkle-DAG node) by the value of its hash is content addressing. (Check out the <NavLink className={classes.link} to="/ipfs/concepts/merkle-dag">concept guide on Merkle-DAGs</NavLink> for a more in-depth treatment of this topic.)
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    IPFS uses a Merkle-DAG that is optimized for representing directories and files, but you can structure a Merkle-DAG in many different ways. For example, Git uses a Merkle-DAG that has many versions of your repo inside of it.
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">


                    To build a Merkle-DAG representation of your content, IPFS often first splits it into blocks. Splitting it into blocks means that different parts of the file can come from different sources, and be authenticated quickly. (If you’ve ever used BitTorrent, you may have noticed that when you download a file, BitTorrent can fetch it from multiple peers at once; this is the same idea.)
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    Merkle-DAGs are a bit of a <a target="_blank" href="https://ipfs.io/ipfs/QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco/wiki/Turtles_all_the_way_down.html">“turtles all the way down”</a> scenario; that is, everything has a CID. You’ve got a file that has a CID. What if there are several files in a folder? That folder has a CID, and that CID contains the CIDs of the files underneath. In turn, those files are made up of blocks, and each of those blocks has a CID. You can see how a file system on your computer could be represented as a DAG. You can also see, hopefully, how Merkle-DAG graphs start to form. For a visual exploration of this concept, take a look at our <a target="_blank" href="https://explore.ipld.io/#/explore/QmSnuWmxptJZdLJpKRarxBMS2Ju2oANVrgbr2xWbie9b2D"> IPLD Explorer</a>.
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    Another useful feature of Merkle-DAGs and breaking content into blocks is that if you have two similar files, they can share parts of the Merkle-DAG; ie, parts of different Merkle-DAGs can reference the same data. For example, if you update a website, only the files that changed will get new content addresses. Your old version and your new version can refer to the same blocks for everything else. This can make transferring versions of large datasets (such as genomics research or weather data) more efficient because you only need to transfer the parts that are new or have changed instead of creating entirely new files each time.
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="h6">
                    <b>
                        3. The DHT
                    </b>
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    So, to recap, IPFS lets you give CIDs to content, and link that content together in a Merkle-DAG using IPLD. Now let’s move on to the last piece: how you find and move content.
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    To find which peers are hosting the content you’re after (discovery), IPFS uses a <a target="_blank" href="https://en.wikipedia.org/wiki/Distributed_hash_table"> distributed hash table</a>, or DHT. A hash table is a database of keys to values. A distributed hash table is one where the table is split across all the peers in a distributed network. To find content, you ask these peers.
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    The <NavLink className={classes.link} to="/libp2p/overview">libp2p project</NavLink> is the part of the IPFS ecosystem that provides the DHT and handles peers connecting and talking to each other. (Note that, as with IPLD, libp2p can also be used as a tool for other distributed systems, not just IPFS.)
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    Once you know where your content is (ie, which peer or peers are storing each of the blocks that make up the content you’re after), you use the DHT <b>again</b> to find the current location of those peers (routing). So, in order to get to content, you use libp2p to query the DHT twice.
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    You’ve discovered your content, and you’ve found the current location(s) of that content — now you need to connect to that content and get it (exchange). To request blocks from and send blocks to other peers, IPFS currently uses a module called <a target="_blank" href="https://github.com/ipfs/specs/tree/master/bitswap"> Bitswap</a>. Bitswap allows you to connect to the peer or peers that have the content you want, send them your wantlist (a list of all the blocks you’re interested in), and have them send you the blocks you requested. Once those blocks arrive, you can verify them by hashing their content to get CIDs. (These CIDs also allow you to deduplicate blocks if needed.)
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    There are <a target="_blank" href="https://github.com/ipfs/camp/blob/master/DEEP_DIVES/24-replication-protocol.md"> other content replication protocols under discussion</a> as well, the most developed of which is <a target="_blank" href="https://github.com/ipld/specs/blob/master/block-layer/graphsync/graphsync.md">Graphsync</a>. There’s also a proposal under discussion to <a target="_blank" href="https://github.com/ipfs/go-bitswap/issues/186">extend the Bitswap protocol</a> to add functionality around requests and responses.
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    <b>
                        A note on libp2p
                    </b>
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    What makes libp2p especially useful for peer to peer connections is connection multiplexing. Traditionally, every service in a system would open a different connection to remotely communicate with other services of the same kind. Using IPFS, you open just one connection, and you multiplex everything on that. For everything your peers need to talk to each other about, you send a little bit of each thing, and the other end knows how to sort those chunks where they belong.
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    This is useful because establishing connections is usually hard to set up and expensive to maintain. With multiplexing, once you have that connection, you can do whatever you need on it.
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="h5">
                    <b>
                        And everything is modular
                    </b>
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    As you may have noticed from this discussion, the IPFS ecosystem is made up of many modular libraries that support specific parts of any distributed system. You can certainly use any part of the stack independently, or combine them in novel ways.
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="h5">
                    <b>
                        Summary
                    </b>
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    The IPFS ecosystem gives CIDs to content, and links that content together by generating IPLD-Merkle-DAGs. You can discover content using a DHT that’s provided by libp2p, and open a connection to any provider of that content and download it using a multiplexed connection. All of this is held together by the “middle” of the stack, which is linked, unique identifiers; that’s the essential part that the IPFS is built on.
                </Typography>
            </Grid>

        </Grid>
    )
}
